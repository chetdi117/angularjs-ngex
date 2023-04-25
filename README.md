# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## NgRx

### NgRx là gì

- Là quản lý state của angular nó khá giống với redux.

### Store:

- Là nơi lưu trử dử liệu(state) sẻ share lưu trử dử liệu trong app. Có lớp bên ngoài hổ trợ tương tác với store và store tương tác với component.
- Cả ứng dụng chứa 1 store thoi. Componet muốn láy từ 1 state từ trong store ra selector này memo driver được. Component muốn tương tác lại cho store này thong qua action coi qua ### action.

### Action:

- Là event action sẻ thông qua reducer dể lắng nghe và sử lý. Trong app có nhiều reducer và action là dispach ra bên ngoài.
- Action có thẻ dùng nhiều reducer.

### Effects:
