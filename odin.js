const birthDate = new Date(2015, 0, 2); // Jan 2, 2015

function calculateAgeParts(birthDate) {
  const today = new Date();
  const diffMs = today - birthDate;
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const years = Math.floor(totalDays / 365.25);
  const days = Math.floor(totalDays - years * 365.25);
  return { years, days };
}

const { years, days } = calculateAgeParts(birthDate);

document.addEventListener('DOMContentLoaded', () => {
  const odinAge = document.getElementById('odinAge');

  odinAge.innerHTML = `Odin (aka Odie) is a Westie who is 
    <span class="age-box">${years}</span> years and 
    <span class="age-box">${days}</span> days old.`;
});
