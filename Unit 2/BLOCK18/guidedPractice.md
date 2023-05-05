bPROMPT
You were hired by a global hotel chain to redesign the functionality of the button panel on their elevators. The goal is to replace the outdated panel in over 1,200 different locations. Before you begin coding, you should make a list of all the ways these panels should be tested to make sure they are working correctly and respond to unexpected input in a way that makes sense. Remember to consider happy and unhappy paths! 

To complete this guided practice, write as many Unit Tests as possible. If time allows, write at least one integration, functional, and acceptance test. Be sure to label each test with its associated type (Unit, Integration, Functional, Acceptance).  

## UNIT TESTS

=> Check that button for every floor lights up when pressed </br>
=> Check that button for every floor switches off when its reached the destination floor </br>
=> Check that the button for emergency stops the elevator immediately </br>
=> Check that the button for emergency activates an alarm </br>

## INTEGRATION TESTS

=> Check that the elevator button panel communicates with the controller and allows the elevator to move in the expected direction </br>
=> Testing that when button is pressed on an open elevator and a person is standing in the doorway </br>
=> Testing that when button is pressed on an open elevator and a person is standing in the doorway makes a sound </br>

## FUNCTIONAL TESTS

=> When the button gets pressed, floor gets selected, and the user is moved to that floor in a reasonable time </br>
=> Check that elevator panel handles multiple requests from different users in a fair and efficient manner </br>

## ACCEPTANCE TESTS

=> Checking that elevator button panel is intuitive to use by users </br>
=> Checking that elevator button panel is intuitive to use by users of different ages and abilities and languages spoken </br>
=> Elevator should be asthetically pleasing </br>
