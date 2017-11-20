query {
  cars {
    _id
    plateNumber
  }
  drivers {
    vehicle {
      plateNumber
    }
  }
  accounts {
    name,
    driverInfo {
      vehicle {
        plateNumber
      }
    }
  }
}