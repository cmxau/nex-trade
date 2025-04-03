document
  .getElementById("subscribe-button")
  .addEventListener("click", function () {
    var email = document.getElementById("email-address").value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
      var toast = document.createElement("div");
      toast.classList.add(
        "toast",
        "absolute",
        "bottom-5",
        "right-5",
        "z-50",
        "opacity-0",
        "transition-opacity",
        "duration-500",
        "ease-in-out",
        "bg-green-500",
        "text-white",
        "rounded-lg",
        "shadow-lg",
        "p-4",
        "flex",
        "items-center",
        "space-x-4"
      );
      toast.innerHTML = `<span>Subscription Successful. Thank you for subscribing!</span>`;

      document.getElementById("toast-container").appendChild(toast);

      setTimeout(function () {
        toast.classList.add("opacity-100");
      }, 10);

      setTimeout(function () {
        toast.classList.remove("opacity-100");
        setTimeout(function () {
          toast.remove();
        }, 300);
      }, 7000);
    } else {
      var errorToast = document.createElement("div");
      errorToast.classList.add(
        "toast",
        "absolute",
        "bottom-5",
        "right-5",
        "z-50",
        "opacity-0",
        "transition-opacity",
        "duration-500",
        "ease-in-out",
        "bg-red-500",
        "text-white",
        "rounded-lg",
        "shadow-lg",
        "p-4",
        "flex",
        "items-center",
        "space-x-4"
      );
      errorToast.innerHTML = `<span>Invalid Email Address. Please enter a valid email address.</span>`;

      document.getElementById("toast-container").appendChild(errorToast);

      setTimeout(function () {
        errorToast.classList.add("opacity-100");
      }, 10);

      setTimeout(function () {
        errorToast.classList.remove("opacity-100");
        setTimeout(function () {
          errorToast.remove();
        }, 300);
      }, 7000);
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  function animateNumbers() {
    const elements = document.querySelectorAll(".animate-number");
    elements.forEach((element) => {
      const target = parseInt(element.getAttribute("data-target"), 10);
      let current = 0;
      const increment = Math.ceil(target / 100);
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));

      const updateNumber = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(updateNumber);
        }
        element.innerText = current.toLocaleString();
      }, stepTime);
    });
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll(".animate-number").forEach((el) => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function animateFeatures() {
    const featureItems = document.querySelectorAll(".feature-item");
    featureItems.forEach((item) => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("opacity-0", "translate-y-10");
              entry.target.classList.add(
                "opacity-100",
                "translate-y-0",
                "transition-all",
                "duration-700"
              );
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(item);
    });
  }

  animateFeatures();
});
