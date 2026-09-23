const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

const ffmpegPath = ffmpeg.path;
console.log('Using FFmpeg at:', ffmpegPath);

const thumbnailsDir = path.join(__dirname, '..', 'public', 'thumbnails');
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true });
}

const projectsFile = path.join(__dirname, '..', 'src', 'data', 'projects.json');
const projects = JSON.parse(fs.readFileSync(projectsFile, 'utf8'));

console.log(`Processing ${projects.length} projects for frame extraction...`);

for (const project of projects) {
  const videoRelative = project.previewVideo; // e.g. /videos/3d_quantum_lift.mp4
  const videoFile = path.join(__dirname, '..', 'public', videoRelative.replace(/^\//, ''));
  const thumbFileName = `${project.id}.jpg`;
  const thumbFile = path.join(thumbnailsDir, thumbFileName);

  if (!fs.existsSync(videoFile)) {
    console.warn(`Video not found: ${videoFile}`);
    continue;
  }

  // Parse duration if possible or pick a smart timestamp
  let seekTime = '00:00:02.000';
  if (project.duration) {
    const parts = project.duration.split(':').map(Number);
    let totalSecs = 0;
    if (parts.length === 2) {
      totalSecs = parts[0] * 60 + parts[1];
    } else if (parts.length === 1) {
      totalSecs = parts[0];
    }
    if (totalSecs <= 3) {
      seekTime = '00:00:00.500';
    } else if (totalSecs <= 10) {
      seekTime = '00:00:01.500';
    } else {
      seekTime = '00:00:02.500';
    }
  }

  try {
    // Run ffmpeg command
    const cmd = `"${ffmpegPath}" -ss ${seekTime} -i "${videoFile}" -vframes 1 -q:v 2 "${thumbFile}" -y`;
    execSync(cmd, { stdio: 'pipe' });
    console.log(`[SUCCESS] Extracted frame for ${project.id} (${project.title}) -> /thumbnails/${thumbFileName}`);
    project.thumbnail = `/thumbnails/${thumbFileName}`;
  } catch (err) {
    // Fallback seek to 0.5s if 2.5s failed
    try {
      const fallbackCmd = `"${ffmpegPath}" -ss 00:00:00.500 -i "${videoFile}" -vframes 1 -q:v 2 "${thumbFile}" -y`;
      execSync(fallbackCmd, { stdio: 'pipe' });
      console.log(`[FALLBACK] Extracted 0.5s frame for ${project.id} -> /thumbnails/${thumbFileName}`);
      project.thumbnail = `/thumbnails/${thumbFileName}`;
    } catch (fallbackErr) {
      console.error(`[ERROR] Failed to extract frame for ${project.id}:`, fallbackErr.message);
    }
  }
}

// Write updated projects.json
fs.writeFileSync(projectsFile, JSON.stringify(projects, null, 2));
console.log(`\nAll done! Updated ${projectsFile} with local video frame thumbnails.`);

