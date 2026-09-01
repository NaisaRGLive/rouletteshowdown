/* =========================================================
   RESULTS SCENE
   ========================================================= */

function initResultsScene() {

  /*
    Render Lucide icons inside the scene.

    This assumes Lucide itself is already loaded globally
    by index.html.
  */

  if (window.lucide) {
    lucide.createIcons();
  }

}


/*
  Call this after results.html has been injected
  into #scene-root.
*/

initResultsScene();
