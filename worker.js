// Send www and any non canonical host to lgsofficial.com, serve static assets otherwise.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.lgsofficial.com") {
      url.hostname = "lgsofficial.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
