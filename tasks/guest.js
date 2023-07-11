function assignSeats(guests, tables, maxGuestsPerTable) {
  const assignments = [];

  let currentTable = 0;
  let currentGuests = 0;

  for (let i = 0; i < guests.length; i++) {
    const guest = guests[i];

    if (currentGuests === maxGuestsPerTable) {
      currentTable++;
      currentGuests = 0;
    }

    if (currentTable === tables.length) {
      break; // Исчерпаны все столы
    }

    const table = tables[currentTable];
    table.guests.push(guest);
    currentGuests++;

    assignments.push({
      guest: guest,
      table: table
    });
  }

  return assignments;
}

// Пример использования
const guests = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const tables = [
  { id: 1, guests: [] },
  { id: 2, guests: [] }
];
const maxGuestsPerTable = 2;

const seatAssignments = assignSeats(guests, tables, maxGuestsPerTable);
console.log(seatAssignments);