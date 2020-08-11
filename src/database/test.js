const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: "Heder Felipe",
    avatar: "https://avatars2.githubusercontent.com/u/60014586?s=460&u=af93c0129044f45473a9b6107568d442cbec3c59&v=4",
    whatsapp: 99123456789,
    bio: "vida loka ",
  }
  classValue = {
    subject: 11, 
    cost: "20", 
  }
  classScheduleValues = [
    {
      weekday: 1,
      time_from: 1200,
      time_to: 1800
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  const selectedProffys = await db.all("SELECT * FROM proffys")

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)
})