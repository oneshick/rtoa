(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const mini_1 = document.querySelector(".circle_5_mini");
    const mini_2 = document.querySelector(".circle_6_mini");
    const itemSrc = document.querySelector(".button_src");
    const button_1 = document.querySelector(".button_1");
    const button_2 = document.querySelector(".button_2");
    const btn_1 = document.querySelector(".btn_1");
    const btn_11 = document.querySelector(".btn_11");
    const btn_2 = document.querySelector(".btn_2");
    const rad = document.querySelector("#rad");
    const var_1 = document.querySelector(".var_1");
    const var_2 = document.querySelector(".var_2");
    const var_3 = document.querySelector(".var_3");
    const var_3_1 = document.querySelector(".var_3_1");
    const var_3_2 = document.querySelector(".var_3_2");
    const var_4 = document.querySelector(".var_4");
    const var_5 = document.querySelector(".var_5");
    const radios = document.querySelectorAll('input[type="radio"]');
    let transition = "rotate360 4.7s linear";
    itemSrc.addEventListener("click", (() => {
        if (false == itemSrc.classList.contains("t")) {
            document.getElementById("button1").disabled = true;
            document.getElementById("button2").disabled = true;
            document.getElementById("button3").disabled = true;
            setTimeout((() => {
                document.getElementById("button1").disabled = false;
                document.getElementById("button2").disabled = false;
                document.getElementById("button3").disabled = false;
            }), 600);
            itemSrc.classList.add("t");
            itemSrc.innerHTML = "Выкл";
            btn_1.style.display = "block";
            btn_11.style.display = "block";
            setTimeout((() => {
                btn_2.style.display = "block";
            }), 600);
            setTimeout((() => {
                mini_1.style.display = "flex";
                mini_1.style.right = "16%";
                mini_1.style.top = "9%";
            }), 600);
            rad.style.display = "block";
            var_1.checked = "checked";
            mini_2.style.display = "none";
            button_1.innerHTML = "кадр 1";
            button_2.innerHTML = "кадр 2";
        } else {
            itemSrc.classList.remove("t");
            itemSrc.innerHTML = "Вкл";
            mini_1.style.display = "none";
            mini_2.style.display = "none";
            btn_1.style.display = "none";
            btn_2.style.display = "none";
            rad.style.display = "none";
            btn_11.style.display = "none";
            button_1.innerHTML = "кадр 1";
            button_2.innerHTML = "кадр 2";
            if (button_1.classList.contains("q")) button_1.classList.remove("q");
            if (button_2.classList.contains("w")) button_2.classList.remove("w");
        }
    }));
    button_1.addEventListener("click", (() => {
        if (false == button_1.classList.contains("q") && true == itemSrc.classList.contains("t")) {
            button_1.classList.add("q");
            rad.style.animation = "none";
            mini_2.style.display = "none";
            mini_1.style.display = "none";
            if (button_2.classList.contains("w")) button_2.classList.remove("w");
            setTimeout((() => {
                rad.style.animation = transition;
            }), 100);
        }
        if (true == itemSrc.classList.contains("t")) for (let radio of radios) if (radio.checked) {
            if ("1" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 600);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 600);
                btn_1.style.left = "30%";
                btn_2.style.left = "7%";
                btn_11.style.left = "0%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "16%";
                    mini_1.style.top = "9%";
                }), 600);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("2" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 2200);
                btn_11.style.left = "2%";
                btn_1.style.left = "68%";
                btn_2.style.left = "35%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "32%";
                    mini_1.style.top = "82%";
                }), 2200);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("3" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 3800);
                btn_11.style.left = "0%";
                btn_1.style.left = "98%";
                btn_2.style.left = "33%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "86%";
                    mini_1.style.top = "45%";
                }), 3800);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("3_1" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 3e3);
                btn_11.style.left = "10%";
                btn_1.style.left = "67%";
                btn_2.style.left = "24%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "85%";
                    mini_1.style.top = "93%";
                }), 3e3);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("3_2" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 2500);
                btn_11.style.left = "16%";
                btn_1.style.left = "57%";
                btn_2.style.left = "34%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "48%";
                    mini_1.style.top = "98%";
                }), 2500);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("4" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_11.style.display = "none";
                btn_1.style.display = "none";
                btn_2.style.display = "none";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "64%";
                    mini_1.style.top = "67%";
                }), 3e3);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("5" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_11.style.display = "none";
                btn_1.style.display = "none";
                btn_2.style.display = "none";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "61%";
                    mini_1.style.top = "64%";
                }), 3e3);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            } else break;
        }
    }));
    button_2.addEventListener("click", (() => {
        if (false == button_2.classList.contains("w") && true == itemSrc.classList.contains("t")) {
            rad.style.animation = "none";
            mini_2.style.display = "none";
            mini_1.style.display = "none";
            button_2.classList.add("w");
            if (button_1.classList.contains("q")) button_1.classList.remove("q");
            rad.style.animation = "none";
            setTimeout((() => {
                rad.style.animation = transition;
            }), 100);
        }
        if (true == itemSrc.classList.contains("t")) for (let radio of radios) if (radio.checked) {
            if ("1" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 570);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 570);
                btn_1.style.left = "30%";
                btn_2.style.left = "6%";
                btn_11.style.left = "0%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "17%";
                    mini_1.style.top = "3%";
                }), 570);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("2" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 2300);
                btn_11.style.left = "2%";
                btn_1.style.left = "68%";
                btn_2.style.left = "38%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "30%";
                    mini_1.style.top = "100%";
                }), 2300);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("3" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 3900);
                btn_11.style.left = "0%";
                btn_1.style.left = "98%";
                btn_2.style.left = "32%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "85%";
                    mini_1.style.top = "38%";
                }), 3900);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("3_1" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 2900);
                btn_11.style.left = "10%";
                btn_1.style.left = "67%";
                btn_2.style.left = "20%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "72%";
                    mini_1.style.top = "91%";
                }), 2900);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("3_2" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_2.style.display = "none";
                setTimeout((() => {
                    btn_2.style.display = "block";
                }), 2600);
                btn_11.style.left = "16%";
                btn_1.style.left = "57%";
                btn_2.style.left = "37%";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_1.style.display = "flex";
                    mini_1.style.right = "56%";
                    mini_1.style.top = "92%";
                }), 2600);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("4" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_11.style.display = "none";
                btn_1.style.display = "none";
                btn_2.style.display = "none";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_2.style.display = "flex";
                    mini_2.style.right = "76%";
                    mini_2.style.top = "82%";
                    mini_1.style.display = "flex";
                    mini_1.style.right = "69%";
                    mini_1.style.top = "74%";
                }), 3e3);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
            if ("5" == radio.value) {
                document.getElementById("button1").disabled = true;
                document.getElementById("button2").disabled = true;
                document.getElementById("button3").disabled = true;
                setTimeout((() => {
                    document.getElementById("button1").disabled = false;
                    document.getElementById("button2").disabled = false;
                    document.getElementById("button3").disabled = false;
                }), 2e3);
                btn_11.style.display = "none";
                btn_1.style.display = "none";
                btn_2.style.display = "none";
                mini_2.style.display = "none";
                mini_1.style.display = "none";
                setTimeout((() => {
                    mini_2.style.display = "flex";
                    mini_2.style.right = "70%";
                    mini_2.style.top = "81%";
                    mini_1.style.display = "flex";
                    mini_1.style.right = "69%";
                    mini_1.style.top = "73%";
                }), 3e3);
                rad.style.animation = "none";
                setTimeout((() => {
                    rad.style.animation = transition;
                }), 100);
            }
        }
    }));
    var_1.addEventListener("click", (() => {
        if (var_1.checked) {
            button_1.innerHTML = "кадр 1";
            button_2.innerHTML = "кадр 2";
        }
    }));
    var_2.addEventListener("click", (() => {
        if (var_2.checked) {
            button_1.innerHTML = "кадр 1";
            button_2.innerHTML = "кадр 2";
        }
    }));
    var_3.addEventListener("click", (() => {
        if (var_3.checked) {
            button_1.innerHTML = "кадр 1";
            button_2.innerHTML = "кадр 2";
        }
    }));
    var_3_1.addEventListener("click", (() => {
        if (var_3_1.checked) {
            button_1.innerHTML = "кадр 1";
            button_2.innerHTML = "кадр 2";
        }
    }));
    var_3_2.addEventListener("click", (() => {
        if (var_3_2.checked) {
            button_1.innerHTML = "кадр 1";
            button_2.innerHTML = "кадр 2";
        }
    }));
    var_4.addEventListener("click", (() => {
        if (var_4.checked) {
            button_1.innerHTML = "100 км";
            button_2.innerHTML = "50 км";
        }
    }));
    var_5.addEventListener("click", (() => {
        if (var_5.checked) {
            button_1.innerHTML = "100 км";
            button_2.innerHTML = "50 км";
        }
    }));
    window["FLS"] = true;
    isWebp();
})();