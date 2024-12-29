document.querySelectorAll(".tree li").forEach(function(e){var t=e.querySelector("ul");if(t){var n=document.createElement("span");n.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(n),n.addEventListener("click",function(e){t.style.display=""===t.style.display?"none":""})}});
//# sourceMappingURL=index.193ff6d3.js.map
