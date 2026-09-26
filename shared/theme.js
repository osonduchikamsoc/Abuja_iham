/* =========================================================
   IHAM — SHARED THEME SWITCH
   Used by both the public site and the admin panel.

   Pages must also carry the tiny inline snippet in <head>
   (see any page) so the stored theme is applied before first
   paint — otherwise a light flash shows on dark-mode loads.
   ========================================================= */
(function () {
  "use strict";

  var KEY = "iham-theme";

  function stored() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null; // private mode / blocked storage
    }
  }

  function remember(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {
      /* nothing to do — the theme still applies for this page view */
    }
  }

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function current() {
    var explicit = document.documentElement.getAttribute("data-theme");
    if (explicit) return explicit;
    return systemPrefersDark() ? "dark" : "light";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    });
    window.dispatchEvent(new CustomEvent("ihamthemechange", { detail: { theme: theme } }));
  }

  function toggle() {
    var next = current() === "dark" ? "light" : "dark";
    remember(next);
    apply(next);
  }

  function init() {
    apply(stored() || (systemPrefersDark() ? "dark" : "light"));

    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.addEventListener("click", toggle);
    });

    // Follow the OS while the visitor has not made their own choice.
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function (e) {
        if (!stored()) apply(e.matches ? "dark" : "light");
      };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.IHAMTheme = { apply: apply, toggle: toggle, current: current };
})();
