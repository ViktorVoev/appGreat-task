const picService = {

    getAllPics: function(query) {
        return fetch(`https://api.pexels.com/v1/search?query=${query}&&per_page=16`, {
            headers: {
              Authorization: '563492ad6f917000010000012425de40e27d43a1837d8ac8d002bc94',
            },
          }).then(res => {
            return res.json()
          })
    },

    getCurrentPic: function(id) {
        return fetch(`https://api.pexels.com/v1/photos/${id}`, {
            headers: {
              Authorization: '563492ad6f917000010000012425de40e27d43a1837d8ac8d002bc94',
            },
          }).then(res => {
            return res.json()
          })
    }

};

export default picService;