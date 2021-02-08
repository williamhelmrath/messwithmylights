export function breathe(color: string) {
    fetch("https://api.lifx.com/v1/lights/all/effects/breathe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_LIFX_KEY}`,
      },
      body: JSON.stringify({
        color,
        persist: false,
        power_on: false,
      }),
    });
}