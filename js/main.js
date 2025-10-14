const toggleNav = document.querySelector(".toggleNav")
const navbar = document.querySelector(".navbar")
toggleNav.addEventListener("click", event => {
  navbar.classList.toggle("active")
})
document.addEventListener("DOMContentLoaded", () => {
  const submenuToggle = document.querySelectorAll(".mainmenu > li.has-submenu > a");

  submenuToggle.forEach(submenu => {
    submenu.addEventListener("click", event => {
      event.preventDefault();
      const parentLi = event.currentTarget.parentElement;
      const currentSubmenu = parentLi.querySelector(".submenu");

      // Close other open submenus
      document.querySelectorAll(".mainmenu li.has-submenu.active").forEach(openLi => {
        if (openLi !== parentLi) {
          openLi.classList.remove("active");
          openLi.querySelector(".submenu").classList.remove("active");
        }
      });

      // Toggle current submenu
      currentSubmenu.classList.toggle("active");
      parentLi.classList.toggle("active");
    });
  });
});

  // ===== Popup message helper =====
  const showMessage = (text, success = true) => {
    document.querySelector(".form-popup-message")?.remove();
    const msg = Object.assign(document.createElement("div"), { 
      className: "form-popup-message", 
      textContent: text 
    });
    Object.assign(msg.style, {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: success ? "hsl(120 60% 35%)" : "hsl(0 80% 40%)",
      color: "white",
      padding: "1em 2em",
      borderRadius: "12px",
      boxShadow: "0 0 15px rgba(0,0,0,0.4)",
      fontFamily: "inherit",
      fontSize: "1rem",
      textAlign: "center",
      zIndex: 9999,
      opacity: 0,
      transition: "opacity 0.3s ease"
    });
    document.body.appendChild(msg);
    requestAnimationFrame(() => msg.style.opacity = "1");
    setTimeout(() => {
      msg.style.opacity = "0";
      setTimeout(() => msg.remove(), 300);
    }, 3000);
  };

  // ===== Discord webhook contact form =====
  const form = document.querySelector(".contact-form");
  const webhookURL = "https://discord.com/api/webhooks/1424467844074176593/b7CBM9fS5psV8ROOsplUPSN1Nw4C-F_DNBu4_b5C_JgODzZjCxKWdoesFBWizHhOEYp5";

  form?.addEventListener("submit", async e => {
    e.preventDefault();
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    if (!name || !email || !message) return showMessage("Please fill in all fields!", false);

    try {
      const res = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          content: `**${name} has sent us a message!**\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}` 
        })
      });
      showMessage(res.ok ? "Message sent successfully!" : "Failed to send message.", res.ok);
      res.ok && form.reset();
    } catch (err) {
      console.error(err);
      showMessage("Error sending message.", false);
    }
  });