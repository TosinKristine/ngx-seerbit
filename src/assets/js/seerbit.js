!(function() {
    this.SeerbitPay = function() {
      var e = this;
      (e.close = null),
        (e.callback = null),
        (e.overlay = null),
        (e.url = "https://checkout.seerbitapi.com"),
        (e.contentHolder = null),
        (e.loader = null);
      if (arguments[0] && "object" == typeof arguments[0]) {
        if (
          ((e.options = (function(e, t) {
            var o;
            for (o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
            return e;
          })({ currency: "NGN", country: "NG", version: "0.1.0" }, arguments[0])),
          !options.tranref)
        )
          return void alert("tranref is not defined");
        if (!options.public_key) return void alert("public_key is not defined");
        if (!options.amount) return void alert("amount is not defined");
      }
      function t(t) {
        "close" === t.data
          ? ((document.querySelector("iframe#seerbit-frame").style.display =
              "none"),
            e.close("close"))
          : "received" === t.data
          ? (document.getElementById("seerbit-loader").style.display = "none")
          : t.origin === url &&
            (function(t) {
              "function" == typeof e.callback && e.callback(t.data);
              ("Successful" !== t.data.message &&
                "APPROVED" !== t.data.message &&
                "Approved by Financial Institution" !== t.data.message) ||
                "00" !== t.data.code ||
                !/^((ftp|http|https):\/\/)|www\.?([a-zA-Z]+)\.([a-zA-Z]{2,})$/i.test(
                  t.callbackurl
                ) ||
                setTimeout(function() {
                  window.location.href =
                    t.callbackurl +
                    "?linkingreference=" +
                    t.data.transaction.linkingreference +
                    "&code=" +
                    t.data.code +
                    "&message=" +
                    t.data.message +
                    "&reference=" +
                    t.data.transaction.reference;
                }, 5e3);
            })(t.data);
      }
      arguments[1] &&
        "function" == typeof arguments[1] &&
        (e.callback = arguments[1]),
        arguments[2] &&
          "function" == typeof arguments[2] &&
          (e.close = arguments[2]),
        e.loaded ||
          function() {
            var t,
              o = document.createDocumentFragment();
            (e.contentHolder = document.createElement("iframe")),
              e.contentHolder.setAttribute("id", "seerbit-frame"),
              e.contentHolder.setAttribute("src", e.url),
              (e.contentHolder.style.width = "100%"),
              (e.contentHolder.style.height = "100%"),
              (e.contentHolder.style.position = "fixed"),
              (e.contentHolder.style.zIndex = "99999"),
              (e.contentHolder.style.top = "0"),
              (e.contentHolder.style.left = "0"),
              (e.contentHolder.style.borderWidth = "0"),
              (e.contentHolder.style.backgroundColor = "rgba(219, 237, 233, .5)"),
              (e.contentHolder.style.display = "block"),
              o.appendChild(e.contentHolder),
              (e.loader = document.createElement("div")),
              e.loader.appendChild(document.createElement("div")),
              e.loader.appendChild(document.createElement("div")),
              e.loader.setAttribute("id", "seerbit-loader"),
              (e.loader.style.display = "block"),
              o.appendChild(e.loader),
              ((t = document.createElement("style")).innerHTML =
                "#seerbit-loader{display: inline-block;position: fixed;top:10vh;left:45vw;width: 80px;height: 80px;}#seerbit-loader div {position: absolute;border: 4px solid #336e9e;opacity: 1;border-radius: 50%;animation: seerbit-loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;}#seerbit-loader div:nth-child(2) {animation-delay: -0.5s;}@keyframes seerbit-loader{0% { top: 36px;left: 36px; width: 0; height: 0; opacity: 1;}100% {top: 0px;left: 0px; width: 72px;height: 72px;opacity: 0;}}");
            var n =
              null !== document.querySelector("#seerbit-pay")
                ? document.querySelector("#seerbit-pay")
                : document.querySelector(".seerbit-pay")
                ? document.querySelector(".seerbit-pay")
                : document.querySelector("body");
            n.appendChild(e.contentHolder),
              n.appendChild(e.loader),
              n.appendChild(t);
          }.call(e),
        function() {
          e.loaded ||
            (e.addEventListener
              ? e.addEventListener("message", t, !1)
              : e.attachEvent("onmessage", t));
          e.loaded && (document.querySelector("iframe#seerbit-frame").src += "");
          (document.querySelector("div#seerbit-loader").style.display = "block"),
            (document.querySelector("iframe#seerbit-frame").onload = function() {
              document.querySelector("iframe#seerbit-frame").style.display =
                "block";
              var t = document.querySelector("iframe#seerbit-frame")
                .contentWindow;
              t.postMessage(e.options, e.url), (e.loaded = !0);
            });
        }.call(e);
    };
  })();