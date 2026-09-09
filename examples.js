/*
 * Shared manifest of example FITS assignments used by examples.html,
 * student.html and compositor.html. Add new entries here and they will
 * automatically appear in the gallery and be loadable by key.
 */
var JS9_EXAMPLES = {

  "cluster-dark": {
    category: "dark-subtraction",
    categoryLabel: "Dark-Frame Subtraction",
    title: "Star Cluster: Removing Sensor Noise",
    description: "A light frame of a star field paired with a matching dark frame. Subtract the dark frame to remove hot pixels and fixed-pattern noise, leaving a cleaner image of the stars.",
    target: "student.html",
    files: {
      light: "data/examples/dark-subtraction/starfield_light.fits.gz",
      dark: "data/examples/dark-subtraction/starfield_dark.fits.gz"
    }
  },

  "galaxy-rgb": {
    category: "rgb-composite",
    categoryLabel: "True-Color RGB Composite",
    title: "Spiral Galaxy: Red / Green / Blue Filters",
    description: "Three exposures of the same galaxy through red, green and blue filters. Give each one its matching colormap from the Color menu, then combine them with Tools \u2192 Blending — watch for the blue star-forming knots along the spiral arms.",
    target: "student.html",
    channelLabels: { red: "Red filter", green: "Green filter", blue: "Blue filter" },
    files: {
      red: "data/examples/rgb-composite/galaxy_red.fits.gz",
      green: "data/examples/rgb-composite/galaxy_green.fits.gz",
      blue: "data/examples/rgb-composite/galaxy_blue.fits.gz"
    }
  },

  "nebula-falsecolor": {
    category: "false-color",
    categoryLabel: "False-Color Imaging",
    title: "Nebula: Three Wavebands, One Hidden Picture",
    description: "Three simulated wavebands of the same nebula — each reveals a completely different physical feature (shock filaments, ionized gas, cool dust). Give each a colormap (red / green / blue) from the Color menu, then combine them with Tools \u2192 Blending to reveal structure invisible in any single band.",
    target: "student.html",
    channelLabels: { red: "Longwave (cool dust)", green: "Midwave (ionized gas)", blue: "Shortwave (shock filaments)" },
    files: {
      red: "data/examples/false-color/nebula_band3.fits.gz",
      green: "data/examples/false-color/nebula_band2.fits.gz",
      blue: "data/examples/false-color/nebula_band1.fits.gz"
    }
  }

};
