export class Location {
  public lat: number
  public lon: number

  private constructor(lat: number, lon: number) {
    this.lat = lat
    this.lon = lon
  }

  static create(lat: number, lon: number): Location {
    return new Location(lat, lon)
  }

  // TODO: Implement distance calculation method
}
