require('dotenv').config();

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

module.exports = {
  discord: {
    botToken: requireEnv('DISCORD_BOT_TOKEN'),
    guildId: requireEnv('GUILD_ID'),
    eventsChannelIds: (process.env.EVENTS_CHANNEL_IDS || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean),
    eventsCategoryIds: (process.env.EVENTS_CATEGORY_IDS || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean),
    raidHelperBotUserId: process.env.RAIDHELPER_BOT_USER_ID || '579155972115660803',
    myUserId: requireEnv('MY_DISCORD_USER_ID'),
  },
  attendingStatuses: (process.env.ATTENDING_STATUSES || 'Accepted,Bench,Late')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean),
  reminderMinutesBefore: parseInt(process.env.REMINDER_MINUTES_BEFORE || '15', 10),
  pollIntervalMs: parseInt(process.env.POLL_INTERVAL_MINUTES || '5', 10) * 60 * 1000,
  timezone: process.env.DEFAULT_TIMEZONE || 'Europe/Berlin',
  google: {
    clientId: requireEnv('GOOGLE_CLIENT_ID'),
    clientSecret: requireEnv('GOOGLE_CLIENT_SECRET'),
    refreshToken: requireEnv('GOOGLE_REFRESH_TOKEN'),
  },
  stateFile: 'watched_events.json',
};