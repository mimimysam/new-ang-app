import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TopicsComponent } from "./topics/topics.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TopicsComponent, FormsModule]
})
export class AppComponent {
  title = 'Areas of Visualization';
}
