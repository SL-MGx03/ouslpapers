const coursesData = [
  {
    subject: "Pure Maths",
    courses: [
      { code: "PEU3300", cat: "https://drive.google.com/drive/folders/115mP1p2GZxeVV3kD9QrFukuwccs63ns7?usp=drive_link", final: "https://drive.google.com/drive/folders/115mP1p2GZxeVV3kD9QrFukuwccs63ns7?usp=drive_link" },
      { code: "PEU3301", cat: "https://drive.google.com/drive/folders/1bfxY5ETiSWZF1Ly2fjOj0Tj2HEvJmSq5?usp=drive_link", final: "https://drive.google.com/drive/folders/1bfxY5ETiSWZF1Ly2fjOj0Tj2HEvJmSq5?usp=drive_link" },
      { code: "PEU3202", cat: "https://drive.google.com/drive/folders/181igDEUxO2yBE3Cj1KhL8h7_lxKnQn5E?usp=drive_link", final: "https://drive.google.com/drive/folders/181igDEUxO2yBE3Cj1KhL8h7_lxKnQn5E?usp=drive_link" }
    ]
  },
  {
    subject: "Applied Maths",
    courses: [
      { code: "ADU3300", cat: "https://drive.google.com/drive/folders/11LLJPJuKH0PzYuNirsfTAd8A_TfOPQzY?usp=drive_link", final: "https://drive.google.com/drive/folders/11LLJPJuKH0PzYuNirsfTAd8A_TfOPQzY?usp=drive_link" },
      { code: "ADU3201", cat: "https://drive.google.com/drive/folders/1leA5tbLmEf5Scbz-2Q4tillJjqbDgXBi?usp=drive_link", final: "https://drive.google.com/drive/folders/1leA5tbLmEf5Scbz-2Q4tillJjqbDgXBi?usp=drive_link" },
      { code: "ADU3302", cat: "https://drive.google.com/drive/folders/1u1dUzzBFjvyqzkx_sthEN1vYTE06RHLj?usp=drive_link", final: "https://drive.google.com/drive/folders/1u1dUzzBFjvyqzkx_sthEN1vYTE06RHLj?usp=drive_link" }
    ]
  },
  {
    subject: "Computer Science",
    courses: [
      { code: "CSU3200", cat: "https://drive.google.com/drive/folders/1NAkPuZizTiVhWfbeMAm2-lvEobV6qxbW?usp=drive_link", final: "https://drive.google.com/drive/folders/1Hyyh_YJ_2pVsQXxi-KEUuc6ybi_nuXYg?usp=drive_link" },
      { code: "CSU3301", cat: "https://drive.google.com/drive/folders/1Ume8N0gyANT2Dl5IMaZbCbs19W7D_DKL?usp=drive_link", final: "https://drive.google.com/drive/folders/1WBfFh0N4_WK2uewFs19L3Nyqh8epZBRC?usp=drive_link" },
      { code: "CSU3302", cat: "https://drive.google.com/drive/folders/1cPw28MnYfc0Emfyzjh5PrTLL5vHeRHlw?usp=drive_link", final: "https://drive.google.com/drive/folders/1cPw28MnYfc0Emfyzjh5PrTLL5vHeRHlw?usp=drive_link"}
    ]
  },
  {
    subject: "Chemistry",
    courses: [
      { code: "CYU3300", cat: "https://drive.google.com/drive/folders/1_ICClJ49X8rxaL4VzxJB6Qp3045Je-o9?usp=drive_link", final: "https://drive.google.com/drive/folders/1_ICClJ49X8rxaL4VzxJB6Qp3045Je-o9?usp=drive_link" },
      { code: "CYU3201", cat: "https://drive.google.com/drive/folders/1auGmtKIA5MvB0IY22GZ1QW3N3iRefPYU?usp=drive_link", final: "https://drive.google.com/drive/folders/1auGmtKIA5MvB0IY22GZ1QW3N3iRefPYU?usp=drive_link" },
      { code: "CYU3302", cat: "https://drive.google.com/drive/folders/1X_9JV8dlJ2NM_h05KbjobjRTLaF5iGpr?usp=drive_link", final: "https://drive.google.com/drive/folders/1X_9JV8dlJ2NM_h05KbjobjRTLaF5iGpr?usp=drive_link" }
    ]
  },
  {
    subject: "Physics",
    courses: [
      { code: "PHU3300", cat: "https://drive.google.com/drive/folders/1V1TxoupniJ3z3ufdvZJ3pomhwo2TpvxJ?usp=drive_link", final: "https://drive.google.com/drive/folders/1V1TxoupniJ3z3ufdvZJ3pomhwo2TpvxJ?usp=drive_link" },
      { code: "PHU3301", cat: "https://drive.google.com/drive/folders/1Pq_PBMmRhaExn4TZe-gmJFlrHmJnB9a2?usp=drive_link", final: "https://drive.google.com/drive/folders/1Pq_PBMmRhaExn4TZe-gmJFlrHmJnB9a2?usp=drive_link" };
      { code: "PHU3202", cat: "https://drive.google.com/drive/folders/1Ao463Mu6fznCwxdfcyJrZVzjohyOGTtx?usp=drive_link", final: "https://drive.google.com/drive/folders/1Ao463Mu6fznCwxdfcyJrZVzjohyOGTtx?usp=drive_link" }
    ]
  },
  {
    subject: "Zoology",
    courses: [
      { code: "ZYU3500", cat: "https://drive.google.com/drive/folders/1EvOFFkYPACgb31aOadqaP6StPlFhbmgD?usp=drive_link", final: "https://drive.google.com/drive/folders/1EvOFFkYPACgb31aOadqaP6StPlFhbmgD?usp=drive_link" },
      { code: "ZYU3301", cat: "https://drive.google.com/drive/folders/1An_CiqvolyAay17-x4vmFdwKIJbp3Lw3?usp=drive_link", final: "https://drive.google.com/drive/folders/1An_CiqvolyAay17-x4vmFdwKIJbp3Lw3?usp=drive_link" }
    ]
  },
  {
    subject: "Botany",
    courses: [
      { code: "BYU3500", cat: "https://drive.google.com/drive/folders/1dnrc_yZN-5QPPzBQOfUAO1oQh5R3mLoi?usp=drive_link", final: "https://drive.google.com/drive/folders/1dnrc_yZN-5QPPzBQOfUAO1oQh5R3mLoi?usp=drive_link" },
      { code: "BYU3301", cat: "https://drive.google.com/drive/folders/1P2mh1aqK5W5TogRnSvika6SHrDZWAPMz?usp=drive_link", final: "https://drive.google.com/drive/folders/1P2mh1aqK5W5TogRnSvika6SHrDZWAPMz?usp=drive_link" }
    ]
  },
  {
    subject: "Open Elective",
    courses: [
      { code: "DSU", cat: "#", final: "#" },
      { code: "TEST", cat: "#", final: "#" }
    ]
  }
];
