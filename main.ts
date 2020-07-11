bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("Hi")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
})
bluetooth.startUartService()
basic.showIcon(IconNames.No)
basic.pause(100)
basic.clearScreen()
