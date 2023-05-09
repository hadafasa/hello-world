Going over the previous workshop together as a class
What are the different testing types?
1. Unit Testing
2. Functional Testing
3. Intergration Testing
4. Acceptance Testing

What do each test type do?
1. Unit Testing - Testing that checks the functionality of an individual portion of code
2. Functional Testing - Testing user scenarios on the browser itself by controlling the broswer programmtically
3. Intergration Testing - Testing combining individual modules and testing them as they work together
4. Acceptance Testing - Testing that the application meets the indentified requirements

It is critical to test both happy and unhappy paths to make sure that both successful and unsuccessful outcomes of a function, feature, or application are considered

 -- Todays Agenda 8-5-23 --
 - Learning Objectives: Interpret pre-defined unit test specifcations written in a JavaScript testing framework.
 - WIIFM (What's In It For Me?)
 => Acceptance Criteria
 => Focus
 => Tidy Code
 => Safe Refactoring
 => Fewer Bugs
 => Living Documentation
 => Career Opportunities in QA

Anatomy of a Test - JASMINE
 - describe('Kittens', function() {
    describe('eat', function() {
        it('returns yum', function() {
            let k = new Kitten();
            expect(k.eat()).toBe('yum');
        });
    });
 });

 - Describe Blocks --- It allows you describe what the test contained in its block represent, used to group multiple tests together, also used to add tags to individual tests, make it more readable for each test is doing and what its purpose is
 // The describe blocks contains sub-groups of specs
 - It Block --- Is where you can break down your unit tests, if the above example you have the it function that is suppose to return yum
 // It block constitutes a single spec
  -- descriptive label of one thing that should happen
  -- function for testing that actually happens
 - Assertion --- When it calls the eat function is wants it to read 'yum'
 // Assertion making your expections
  -- There can be many assertions within one it block
  -- If something is thrown at any point in an it block, the spec stops and fails.

Purpose of Test Driven Development
// Write tests first, then write code to pass the tests.
- Focus on what the code does
- Have a goal
- Ensure you do not blow off automated testing
- Improve design and modularity

Purpose of TDD
- If you write the test after the code, you are focusing solely on the code passing the test and this means that a bug is always possible
- however, if you write the test in advance, you are focusing first on what the code should do and then on implementation
// Steps:
    - Write the test
    - Run the test
    - Write code
    - REFACTOR or fix

What to Test For?
// Test for behavior, not implementation
 - X "I expect this multiply function to use the add function"
 - ! "I expect this multiply function to return 6 given the inputs 2 and 3"

 Implementation details change all the time, but intended behaviors generally do not change