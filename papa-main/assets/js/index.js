document.addEventListener("mousemove", (e) => {
  console.log("hgguy");
  Object.assign(document.documentElement, {
    style: `--moveX: ${(e.clientX - window.innerWidth / 2) * 0.01}deg; 
         --moveY: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
        `,
  });
});
