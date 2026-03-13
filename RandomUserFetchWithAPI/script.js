// ------------ Random Data Fetching Using Randomuser API -----------


fetch("https://randomuser.me/api/?results=3")
  .then((raw) => {
    return raw.json();
  })
  .then((data) => {

    // =====================
    // CONTAINER — outside forEach (sirf ek baar banana hai)
    // =====================
    const container = document.createElement("div");
    container.classList.add("container");

    // =====================
    // CARDS LOOP — data.results use karo, users nahi
    // =====================
    data.results.forEach((user) => {

      // Card
      const card = document.createElement("div");
      card.classList.add("card");

      // ✅ Avatar — img element banana hoga, string nahi
      const avatar = document.createElement("img");
      avatar.classList.add("avatar");
      avatar.src = user.picture.large;   // URL set karo
      avatar.alt = "profile";

      // Info wrapper
      const info = document.createElement("div");
      info.classList.add("info");

      // ✅ Name — randomuser mein name object hai {first, last}
      const name = document.createElement("p");
      name.classList.add("name");
      name.textContent = `${user.name.first} ${user.name.last}`;

      // Email
      const email = document.createElement("p");
      email.classList.add("email");
      email.textContent = user.email;

      // ---- APPEND ----
      info.appendChild(name);
      info.appendChild(email);

      card.appendChild(avatar);
      card.appendChild(info);

      container.appendChild(card);
    });

    // =====================
    // REFRESH BUTTON — loop ke bahar
    // =====================
    const btn = document.createElement("button");
    btn.classList.add("refresh-btn");
    btn.textContent = "⟳ Refresh";
    btn.addEventListener("click", () => {
      location.reload();
    });

    // =====================
    // ✅ ADD TO PAGE — querySelector (querySelectorAll NodeList return karta hai)
    // =====================
    document.body.appendChild(container);
    document.body.appendChild(btn);

  })
  .catch((err) => {
    console.log(err);
  });