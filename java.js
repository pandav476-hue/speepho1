function handleSearch() {
  const rawValue = document.getElementById("budgetInput").value;
  const budget = parseInt(rawValue.replace(/,/g, ""));

  if (isNaN(budget)) {
    alert("Please enter a valid budget & Do not use ,");
    return;
  }

  if (budget < 20000 || budget > 150000) {
    alert("Please enter a budget between ₹20,000 and ₹1,50,000. Do not use ,");
    return;
  }

  let target;

  if (budget >= 20000 && budget <= 50000) {
    target = document.getElementById("midBudget"); // VALUE FOR MONEY
  } 
  else if (budget >= 51000 && budget <= 90000) {
    target = document.getElementById("highBudget"); // HIGH-END
  } 
  else {
    target = document.getElementById("premiumBudget"); // ELITE
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
