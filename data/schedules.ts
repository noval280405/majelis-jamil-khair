import { classes } from './classes'
export const schedules = classes.flatMap((item) =>
  item.days.map((day) => ({ ...item, day, key: `${item.id}-${day}` })),
)
