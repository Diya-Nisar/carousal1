document.querySelectorAll('input[name="position"]').forEach((radio, index) => {
    radio.addEventListener("change", () => {
      document.documentElement.style.setProperty("--position", index + 1);
    });
  });
  