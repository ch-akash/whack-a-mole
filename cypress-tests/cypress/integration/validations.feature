Feature: Test various constraints related to game

    Scenario: Box default location validation before any user interaction
        Given app is loaded
        Then box should be at initial location
        And box height should be "100px" and width should be "100px"
        And box should be clickable

    Scenario: User idle state test before first mouse click
        Given app is loaded
        Then box location should not change after timeout

    Scenario: User idle state test after first mouse click
        Given app is loaded
        When user has clicked the box for 1 time
        And  user is idle for 11 seconds
        Then box position should reset according to window configuration

    Scenario: Mouse click outside the box
        Given app is loaded
        And box should be clickable
        And click at fixed location outside the box
        Then  after mouse click current box location should not be same as previous location

    Scenario: Box UI characterstics validations
        Given app is loaded
        Then validate box UI data
            | height | width | colour           | cursor  |
            | 100px  | 100px | rgb(255, 160, 0) | pointer |

    Scenario: Box location validation after user has made multiple clicks
        Given app is loaded
        When  box should be clickable
        Then  after mouse click current box location should not be same as previous location

    Scenario: Sanity after too many sequential mouse clicks on box
        Given app is loaded
        When  user has clicked the box for 40 time
        Then  box should be clickable

        When user is idle for 11 seconds
        Then box position should reset according to window configuration

