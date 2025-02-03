function estaEnchina(lat, lon) {
    // Define the bounding box for China
    const minLat = 17.0;
    const maxLat = 53.0;
    const minLon = 73.0;
    const maxLon = 135.0;

    // Check if the given coordinates are within the bounding box
    if (lat >= minLat && lat <= maxLat && lon >= minLon && lon <= maxLon) {
        return true;
    } else {
        return false;
    }
}
module.exports = estaEnchina;