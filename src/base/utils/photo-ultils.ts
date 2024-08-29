export function getSrcImage(url: string) {
    try {
        // if (url && !url.includes("http") && !url.includes("/")) {
        //     // const config: Config = getConfigFromStorage();
        //     // if (!config.api_upload_short) { return url; }
        //     // return `${config.api_upload_short}${url}`;
        // } else {
        //     return url;
        // }
        return url;
    } catch (error) {
        console.error(error);
        return url;
    }
}

export function getLinkPhoto(photo: string) {
    // try {
    //   const config: Config = getConfigFromStorage();
    //   if (!config.api_upload_short) {
    //     return photo;
    //   }
    //   // console.log("config.api_upload_short", `${config.api_upload_short}${photo}`)
    //   return `${config.api_upload_short}${photo}`;
    // } catch (error) {
    //   // Handle errors here if getConfigFromStorage fails
    //   console.error("Error fetching config:", error);
    //   throw error;
    // }
  }