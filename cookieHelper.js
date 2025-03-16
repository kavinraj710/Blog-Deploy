window.cookieHelper = {
    setCookie: function (name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
        let expires = `expires=${date.toUTCString()}`;
        let secureFlag = location.protocol === "https:" ? "Secure;" : ""; // Only add Secure if on HTTPS

        document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; SameSite=Strict; ${secureFlag}`;
    },
    deleteCookie: function (name) {
        let secureFlag = location.protocol === "https:" ? "Secure;" : "";
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict; ${secureFlag}`;
    },
    getCookie: function (name) {
        let cookies = document.cookie.split('; ');
        for (let cookie of cookies) {
            let [key, value] = cookie.split('=');
            if (key === name) return decodeURIComponent(value);
        }
        return null;
    }
};
