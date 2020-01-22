function calculate()
{
  var billamt = document.getElementById("BillAmount").value;
  var qual = document.getElementById("Quality").value;
  var party = document.getElementById("PartySize").value;
  console.log(qual)

  if(billamt === "" || Quality == 0)
  {
    alert("Please insert values");
    return;
  }
  if(party === "" || party <= 1)
  {
    party = 1;
  }
  var total = (billamt * qual) / party;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("tip").innerHTML = total;
}
