import { youtubeMockedData } from "../utils";

const search = async (query = "paisajes") => {
    try {
      /* global gapi */
      /* eslint no-undef: "error" */
      const { result } = process.env.NODE_ENV === "development" 
      ? await new Promise(res => res({ result: youtubeMockedData })) 
      : await gapi.client.request({
        path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&maxResults=12&regionCode=MX&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
      });
      return result.items;
    } catch (reason) { return reason }
}

export default { search };
