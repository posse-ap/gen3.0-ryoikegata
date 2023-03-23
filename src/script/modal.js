"use strict";

{
  const button = document.getElementById("modalButton");

  const modal = document.getElementById("modal");
  const mask = document.getElementById("mask");
  const closeButton = document.getElementById("closeButton");

  button.addEventListener("click", () => {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });



  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });

  //カレンダー
  const data = document.getElementById("data");
  const calendar = document.getElementById("calendar");

  data.addEventListener("click", () => {
    closeButton.classList.add("hidden");
    loadingButton.classList.add("hidden");
    modalContent.classList.add("hidden");
    calendar.classList.remove("hidden");
  });

  //カレンダー機能

  {
    const today = new Date(today + '0').splice(-2);
    let year = today.getFullYear();
    let month = today.getMonth();

    function getCalendarBody() {
      const dates = [];
      const lastDate = new Date(year, month + 1, 0).getDate();

      for (let i = 1; i <= lastDate; i++) {
        dates.push({
          date: i,
          isDisabled: false,
        });
      }

      return dates;
    }

    function getCalendarHead() {
      const dates = [];
      const d = new Date(year, month, 0).getDate();
      const n = new Date(year, month, 1).getDay();

      for (let i = 0; i < n; i++) {
        dates.unshift({
          date: d - i,
          isDisabled: true,
        });
      }

      return dates;
    }

    function getCalendarTail() {
      const dates = [];
      const lastDay = new Date(year, month + 1, 0).getDay();

      for (let i = 1; i < 7 - lastDay; i++) {
        dates.push({
          date: i,
          isDisabled: true,
        });
      }

      return dates;
    }

    function clearCalendar() {
      const tbody = document.querySelector("tbody");

      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
    }

    function titleCalendar() {
      const title = `${year}/${month + 1}`;
      document.getElementById("title").textContent = title;
    }

    function weekCalendar() {
      const dates = [
        ...getCalendarHead(),
        ...getCalendarBody(),
        ...getCalendarTail(),
      ];

      const weeks = [];
      const weeksCount = dates.length / 7;

      for (let i = 0; i < weeksCount; i++) {
        weeks.push(dates.splice(0, 7));
      }

      weeks.forEach((week) => {
        const tr = document.createElement("tr");
        week.forEach((date) => {
          const td = document.createElement("td");
          td.classList.add(".data");

          td.textContent = date.date;
          if (date.isDisabled) {
            td.classList.add("disabled");
          }

          tr.appendChild(td);
        });

        document.querySelector("tbody").appendChild(tr);
      });
    }

    function createCalendar() {
      clearCalendar();
      titleCalendar();
      weekCalendar();
    }

    document.getElementById("prev").addEventListener("click", () => {
      month--;
      if (month < 0) {
        year--;
        month = 11;
      }

      createCalendar();

      dataCheck();
    });
    document.getElementById("next").addEventListener("click", () => {
      month++;
      if (month > 11) {
        year++;
        month = 0;
      }
      createCalendar();


      dataCheck();
    });

    createCalendar();
  }

  function dataCheck() {
    let tdData = document.querySelectorAll("td");
    const dataInput = document.getElementById("data");
    tdData.forEach(function (datum) {
      datum.addEventListener("click", () => {
        modalContent.classList.remove("hidden");
        calendar.classList.add("hidden");
        loadingButton.classList.remove("hidden");
        closeButton.classList.remove("hidden");

        const today = document.getElementById("title");
        dataInput.value = today.innerHTML + "/" + datum.innerHTML;
      });
    });
  }
  dataCheck();

  //loading

  const loading = document.getElementById("loading");
  const loadingButton = document.getElementById("loadingButton");
  const checkMark = document.getElementById("checkMark");
  const twitter = document.getElementById("twitter");

  function loader() {
    loading.classList.remove("hidden");
    closeButton.classList.add("hidden");
    modalContent.classList.add("hidden");
    loadingButton.classList.add("hidden");
  }
  function finish() {
    loading.classList.add("hidden");
    checkMark.classList.remove("hidden");
    closeButton.classList.remove("hidden");
  }

  loadingButton.addEventListener("click", () => {
    setTimeout(loader(), 3000);
    setTimeout(finish, 3000);

    if (twitter.checked) {
      const textArea = document.getElementById("textArea");
      const twitterContent = `${textArea.value}`;
      window.open(`http://twitter.com/intent/tweet?&text=${twitterContent}`);
    }
  });
  
  const responsiveButton = document.getElementById('responsiveButton');

  responsiveButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });

  console(today);
}


