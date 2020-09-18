# Sean's Portfolio Project

## Project Schedule

| Day   | Deliverable         | Status     |
| ----- | ------------------- | ---------- |
| Day 1 | Project Description | Complete   |
| Day 1 | Wireframes/ Matrix  | Complete   |
| Day 3 | HTML/CSS/JavaScript | Complete   |
| Day 4 | MVP/ Debugging      | Complete |
| Day 5 | Post MVP/ Tweaks    | Complete |
| Day 6 | Present             | Incomplete |

## Project Description

I'll be writing and creating my portfolio website, that will display my projects that I have done, and I will incorporate an about me section, and my contact information.

## Google Sheet

[My Google Sheet](https://docs.google.com/spreadsheets/d/1Op6UNpvOlkseYN3nuUvIPktQIl_CGZMYnK6axwH5__s/edit?usp=sharing)

## Wireframes

[Mobile](https://i.imgur.com/Cxr28up.jpg)

[Desktop](https://i.imgur.com/9nNzw0n.jpg)

## Time/Priority Matrix

[Time/Priority Matrix](https://i.imgur.com/xPOnde4.jpg)

## MVP

| Component             | Priority | Estimated Time | Actual Time |
| --------------------- | -------- | -------------- | ----------- |
| Project Previews      | H        | 1 hr           | 1hr         |
| Writing HTML/CSS      | H        | 2.5hrs         | 2.5hrs      |
| Mobile Menu Icon      | H        | 1.5hrs         | 1hr         |
| Nav Bar               | H        | 2hrs           | 2hrs        |
| Form                  | H        | 2hrs           | 2hrs        |
| Adding Design         | M        | 2.5hrs         | 3hrs        |
| Mobile/Tablet/Desktop | H        | 1.5hrs         | 1.5hrs      |
| Icons/Images          | M        | 1hr            | 1.5hrs      |
| Responsive/Testing    | H        | 3hrs           | 3.5hrs      |
| API                   | H        | 2.5hrs         | 2hrs        |
| Total Time            | H        | 22.5hrs        | 20hrs       |

## Post MVP

| Component               | Priority | Estimated Time | Actual Time |
| ----------------------- | -------- | -------------- | ----------- |
| Carousel                | L        | 2hrs           | 2hrs        |
| Banner/Slideshow        | H        | 2.5hrs         | 2hrs        |
| Animation               | L        | 3hrs           | hrs         |
| Transitions             | L        | 1.5hrs         | hrs         |
| Changing Icons on Hover | M        | 1hr            | 1hr         |
| Interactions            | M        | 1.5hrs         | 1hr         |
| Additional Design       | M        | 1hr            | 2hrs        |
| Total Time              | H        | 14.5hrs        | 8hrs        |

## Additional Libraries

JQUERY

Bootstrap

## Code Snippet

```
.text-boxes {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr, 1fr, 1fr, 1fr;
  grid-template-rows: 1fr, 1fr, 1fr 1fr;
  grid-template-areas:
    ". name name ."
    ". email email ."
    "message message message message"
    ". submit submit .";
}
```

## Issues and Resolutions

ERROR: Linked my API to an element, and it was appearing in two different places on my site.

RESOLUTION: Realized the element I linked it too was also in another div element.

## Sites to Emulate

| Link                                                                      | What I'd Like to Incorporate            |
| ------------------------------------------------------------------------- | --------------------------------------- |
| [Jonathan Wong](https://jonathanwong110.github.io/JonathanWongPortfolio/) | The banner and text animation           |
| [Matthew Williams](http://findmatthew.com/)                               | The animation as you scroll             |
| [Josue Espinosa ](http://ejosue.com/)                                     | The scroll transition and landing page. |
