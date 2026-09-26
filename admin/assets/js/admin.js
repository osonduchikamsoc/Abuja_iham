/* =========================================================
   IHAM ADMIN — shared behaviour
   Sidebar, tables, charts, formatters, toasts.
   ========================================================= */
(function () {
  "use strict";

  /* -------------------------------------------------------
     FORMATTERS
     ------------------------------------------------------- */
  function money(v) {
    return "₦" + Number(v || 0).toLocaleString("en-NG");
  }

  // ₦85,000,000 is noise in a KPI tile — ₦85.0m reads instantly.
  function moneyShort(v) {
    v = Number(v || 0);
    if (v >= 1e9) return "₦" + (v / 1e9).toFixed(1).replace(/\.0$/, "") + "b";
    if (v >= 1e6) return "₦" + (v / 1e6).toFixed(1).replace(/\.0$/, "") + "m";
    if (v >= 1e3) return "₦" + Math.round(v / 1e3) + "k";
    return "₦" + v;
  }

  function num(v) {
    return Number(v || 0).toLocaleString("en-NG");
  }

  function date(d) {
    if (!d) return "—";
    return new Date(d + "T00:00:00").toLocaleDateString("en-NG", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function initials(name) {
    return String(name || "?")
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(function (w) { return w[0]; })
      .join("")
      .toUpperCase();
  }

  function realtorName(id) {
    var r = (window.ADMIN_REALTORS || []).filter(function (x) { return x.id === id; })[0];
    return r ? r.name : "—";
  }

  /* -------------------------------------------------------
     SIDEBAR
     ------------------------------------------------------- */
  function initSidebar() {
    var sidebar = document.querySelector(".sidebar");
    var toggle = document.querySelector(".sidebar-toggle");
    if (!sidebar || !toggle) return;

    var scrim = document.createElement("div");
    scrim.className = "sidebar-scrim";
    document.body.appendChild(scrim);

    function open() {
      sidebar.classList.add("open");
      scrim.classList.add("show");
      document.body.style.overflow = "hidden";
      toggle.setAttribute("aria-expanded", "true");
    }

    function close() {
      sidebar.classList.remove("open");
      scrim.classList.remove("show");
      document.body.style.overflow = "";
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      sidebar.classList.contains("open") ? close() : open();
    });

    scrim.addEventListener("click", close);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 991.98) close();
    });

    sidebar.querySelectorAll(".nav-item").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.innerWidth <= 991.98) close();
      });
    });
  }

  /* -------------------------------------------------------
     TOASTS
     ------------------------------------------------------- */
  function toast(message, kind) {
    var host = document.querySelector(".toast-host");
    if (!host) {
      host = document.createElement("div");
      host.className = "toast-host";
      document.body.appendChild(host);
    }
    var el = document.createElement("div");
    el.className = "toast-msg" + (kind === "err" ? " err" : "");
    el.innerHTML =
      '<i class="fa-solid ' +
      (kind === "err" ? "fa-circle-exclamation" : "fa-circle-check") +
      '"></i><span>' + esc(message) + "</span>";
    host.appendChild(el);
    setTimeout(function () {
      el.style.opacity = "0";
      el.style.transform = "translateY(8px)";
      el.style.transition = "opacity .25s, transform .25s";
      setTimeout(function () { el.remove(); }, 260);
    }, 3200);
  }

  /* -------------------------------------------------------
     PASSWORD REVEAL + STRENGTH
     ------------------------------------------------------- */
  function initPasswords() {
    document.querySelectorAll(".pw-toggle").forEach(function (btn) {
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", function () {
        var input = btn.parentElement.querySelector("input");
        if (!input) return;
        var show = input.type === "password";
        input.type = show ? "text" : "password";
        btn.setAttribute("aria-pressed", show ? "true" : "false");
        btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
        btn.innerHTML = show
          ? '<i class="fa-regular fa-eye-slash"></i>'
          : '<i class="fa-regular fa-eye"></i>';
        // Keep the caret where the user left it
        input.focus();
        var v = input.value;
        try { input.setSelectionRange(v.length, v.length); } catch (e) {}
      });
    });

    document.querySelectorAll("[data-strength]").forEach(function (input) {
      var meter = document.querySelector(input.dataset.strength);
      if (!meter) return;
      var hint = meter.parentElement.querySelector(".pw-hint");

      input.addEventListener("input", function () {
        var v = input.value;
        var score = 0;
        if (v.length >= 8) score++;
        if (/[0-9]/.test(v)) score++;
        if (/[^A-Za-z0-9]/.test(v)) score++;
        if (/[a-z]/.test(v) && /[A-Z]/.test(v)) score++;
        if (!v) score = 0;

        meter.className = "pw-meter s" + score;
        if (hint) {
          hint.textContent = !v
            ? "Minimum 8 characters, with a number and a special character."
            : ["Too weak", "Weak", "Fair", "Good", "Strong"][score];
        }
      });
    });
  }

  /* -------------------------------------------------------
     OTP BOXES
     ------------------------------------------------------- */
  function initOtp() {
    var row = document.querySelector(".otp-row");
    if (!row) return;
    var boxes = Array.prototype.slice.call(row.querySelectorAll("input"));

    boxes.forEach(function (box, i) {
      box.addEventListener("input", function () {
        box.value = box.value.replace(/\D/g, "").slice(0, 1);
        if (box.value && boxes[i + 1]) boxes[i + 1].focus();
      });
      box.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !box.value && boxes[i - 1]) boxes[i - 1].focus();
        if (e.key === "ArrowLeft" && boxes[i - 1]) boxes[i - 1].focus();
        if (e.key === "ArrowRight" && boxes[i + 1]) boxes[i + 1].focus();
      });
      box.addEventListener("paste", function (e) {
        e.preventDefault();
        var digits = (e.clipboardData || window.clipboardData)
          .getData("text").replace(/\D/g, "").split("");
        boxes.forEach(function (b, j) { b.value = digits[j] || ""; });
        (boxes[Math.min(digits.length, boxes.length - 1)] || boxes[0]).focus();
      });
    });
  }

  /* -------------------------------------------------------
     DATATABLES
     Bootstrap 5 styled, sensible defaults, mobile-safe.
     ------------------------------------------------------- */
  function makeTable(selector, options) {
    if (!window.jQuery || !window.jQuery.fn || !window.jQuery.fn.DataTable) return null;
    var $t = window.jQuery(selector);
    if (!$t.length) return null;

    var dt = $t.DataTable(
      Object.assign(
        {
          pageLength: 10,
          lengthMenu: [10, 25, 50, 100],
          order: [],
          autoWidth: false,
          language: {
            search: "",
            searchPlaceholder: "Search records…",
            lengthMenu: "Show _MENU_",
            info: "_START_–_END_ of _TOTAL_",
            infoEmpty: "No records",
            infoFiltered: "(filtered from _MAX_)",
            emptyTable: "Nothing here yet",
            zeroRecords: "No match for that search",
            paginate: { previous: "‹", next: "›" }
          }
        },
        options || {}
      )
    );

    // Cells are nowrap, so a wide table has to scroll somewhere. Give the
    // table its own scroller rather than letting it push the page sideways.
    // Wrapping only the <table> keeps the search box and pagination still.
    var table = $t.get(0);
    if (table && !table.parentElement.classList.contains("dt-scroll")) {
      var scroller = document.createElement("div");
      scroller.className = "dt-scroll";
      table.parentElement.insertBefore(scroller, table);
      scroller.appendChild(table);
      watchScroll(scroller);
    }

    return dt;
  }

  // The sticky first column only needs its edge shadow once content is
  // actually hidden behind it, and the edge fades only while there is
  // something left to scroll to.
  function watchScroll(el) {
    var shell = document.createElement("div");
    shell.className = "dt-scroll-shell";
    el.parentElement.insertBefore(shell, el);
    shell.appendChild(el);

    var sync = function () {
      var max = el.scrollWidth - el.clientWidth;
      el.classList.toggle("is-scrolled", el.scrollLeft > 2);
      shell.classList.toggle("can-left", el.scrollLeft > 2);
      shell.classList.toggle("can-right", max > 2 && el.scrollLeft < max - 2);
    };

    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    // Row counts change with paging, search and the segmented filters,
    // which changes the scrollable width.
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(sync);
      ro.observe(el);
      if (el.firstElementChild) ro.observe(el.firstElementChild);
    }

    sync();
  }

  // Plain (non-DataTable) tables get the same treatment.
  function wrapPlainTables() {
    document.querySelectorAll(".table-wrap > table").forEach(function (table) {
      if (table.parentElement.classList.contains("dt-scroll")) return;
      var scroller = document.createElement("div");
      scroller.className = "dt-scroll";
      table.parentElement.insertBefore(scroller, table);
      scroller.appendChild(table);
      watchScroll(scroller);
    });
  }

  /* -------------------------------------------------------
     CHARTS (Chart.js) — re-themed when the theme flips
     ------------------------------------------------------- */
  var charts = [];

  function tokens() {
    var cs = getComputedStyle(document.documentElement);
    return {
      text: cs.getPropertyValue("--text-muted").trim(),
      grid: cs.getPropertyValue("--border").trim(),
      accent: cs.getPropertyValue("--accent").trim(),
      surface: cs.getPropertyValue("--surface").trim(),
      body: cs.getPropertyValue("--text").trim()
    };
  }

  // A palette that stays legible in both themes.
  var SERIES = ["#6f9068", "#c3a15a", "#4a7c9b", "#a8705c", "#7d6a9c", "#5f9ea0"];

  function chartDefaults() {
    if (!window.Chart) return;
    var t = tokens();
    window.Chart.defaults.color = t.text;
    window.Chart.defaults.borderColor = t.grid;
    window.Chart.defaults.font.family =
      getComputedStyle(document.body).fontFamily;
    window.Chart.defaults.plugins.legend.display = false;
    window.Chart.defaults.plugins.tooltip.backgroundColor = t.surface;
    window.Chart.defaults.plugins.tooltip.titleColor = t.body;
    window.Chart.defaults.plugins.tooltip.bodyColor = t.text;
    window.Chart.defaults.plugins.tooltip.borderColor = t.grid;
    window.Chart.defaults.plugins.tooltip.borderWidth = 1;
    window.Chart.defaults.plugins.tooltip.padding = 10;
    window.Chart.defaults.plugins.tooltip.displayColors = true;
    window.Chart.defaults.maintainAspectRatio = false;
  }

  function registerChart(fn) {
    charts.push(fn);
    fn();
  }

  function rebuildCharts() {
    chartDefaults();
    charts.forEach(function (fn) { fn(); });
  }

  window.addEventListener("ihamthemechange", function () {
    // Let the CSS variables settle before reading them back
    setTimeout(rebuildCharts, 60);
  });

  /* -------------------------------------------------------
     SMALL RENDER HELPERS
     ------------------------------------------------------- */
  function rankList(target, rows, opts) {
    var el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    opts = opts || {};
    var max = Math.max.apply(null, rows.map(function (r) { return r.value; }));
    var total = rows.reduce(function (a, r) { return a + r.value; }, 0);

    el.innerHTML = rows
      .map(function (r, i) {
        var pct = Math.round((r.value / max) * 100);
        var share = total ? Math.round((r.value / total) * 100) : 0;
        return (
          '<div class="rank-row">' +
            '<div class="rank-name">' + esc(r.name) + "</div>" +
            '<div class="rank-val">' + num(r.value) +
              (opts.share ? ' <span style="opacity:.6">· ' + share + "%</span>" : "") +
            "</div>" +
            '<div class="rank-track"><i style="width:' + pct + "%;background:" +
              SERIES[i % SERIES.length] + '"></i></div>' +
          "</div>"
        );
      })
      .join("");
  }

  function payProgress(paid, total) {
    var pct = total ? Math.min(100, Math.round((paid / total) * 100)) : 0;
    var cls = pct >= 100 ? "full" : pct < 25 ? "low" : "";
    return (
      '<div class="pay-progress">' +
        '<div class="pay-bar"><i class="' + cls + '" style="width:' + pct + '%"></i></div>' +
        '<div class="pay-meta"><b>' + moneyShort(paid) + "</b> of " + moneyShort(total) +
        " · " + pct + "%</div>" +
      "</div>"
    );
  }

  function statusBadge(status) {
    var map = {
      Completed: "ok", Confirmed: "ok", Active: "ok", Certified: "ok",
      Accepted: "ok", Replied: "ok", Available: "ok", Published: "ok",
      "On Plan": "info", "In Training": "info", Reviewing: "info", New: "info",
      Pending: "warn", Behind: "warn", Probation: "warn", "Under Offer": "warn",
      Draft: "neutral", Closed: "neutral", Inactive: "neutral", Sold: "neutral",
      Failed: "bad", Declined: "bad", "No Show": "bad", Overdue: "bad"
    };
    return '<span class="badge-soft ' + (map[status] || "neutral") + '">' + esc(status) + "</span>";
  }

  function rowActions(buttons) {
    return (
      '<div class="row-actions">' +
      buttons
        .map(function (b) {
          return (
            '<button class="row-btn' + (b.danger ? " danger" : "") +
            '" type="button" title="' + esc(b.title) + '" aria-label="' + esc(b.title) + '">' +
            '<i class="fa-solid ' + b.icon + '"></i></button>'
          );
        })
        .join("") +
      "</div>"
    );
  }

  /* -------------------------------------------------------
     LOGOUT (design stage)
     ------------------------------------------------------- */
  function initLogout() {
    document.querySelectorAll("[data-logout]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        try { sessionStorage.removeItem("iham-admin"); } catch (err) {}
        window.location.href = "login.html";
      });
    });
  }

  /* -------------------------------------------------------
     BOOT
     ------------------------------------------------------- */
  function init() {
    initSidebar();
    initPasswords();
    initOtp();
    initLogout();
    chartDefaults();
    // Page scripts run after this and build their own DataTables; this
    // catches the hand-written tables (dashboard, settings team list).
    setTimeout(wrapPlainTables, 0);

    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    // Any form marked data-demo just confirms instead of navigating
    document.querySelectorAll("form[data-demo]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          return;
        }
        form.classList.remove("was-validated");
        toast(form.dataset.demo || "Saved.");
        if (form.dataset.reset === "true") form.reset();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.Admin = {
    money: money,
    moneyShort: moneyShort,
    num: num,
    date: date,
    esc: esc,
    initials: initials,
    realtorName: realtorName,
    toast: toast,
    makeTable: makeTable,
    registerChart: registerChart,
    tokens: tokens,
    SERIES: SERIES,
    rankList: rankList,
    payProgress: payProgress,
    statusBadge: statusBadge,
    rowActions: rowActions
  };
})();
