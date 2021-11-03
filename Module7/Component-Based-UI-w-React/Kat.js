const input = process.argv[2]

whoIs = (input) => {
  if (input === "Kat") {
    const obj = {
      name: "Kat",
      age: 31,
      location: "Calgary/Nelson",
      website: "connkat.com",
      currentJob: "Freelance Dev + Instructor + Transition Mentor",
      previously: {
        NeoFinancialDev: "2019-2021",
        LighthouseLabsCMCS: "2018-2019",
        LHL10WeekBootcamp: "2018",
        ONGovt: "2016-2018",
      }
    };
    answer = JSON.stringify(obj, null, 4)
  } else {
    answer = "I don't know who you are talking about. Try asking about Kat."
  }
  return answer
};

console.log(whoIs(input))
