import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Topic } from '../topic';
import { TOPICS } from '../topics-list';
// created topics component with 'ng generate component topics'
// angular no longer using modules, switched to standalone app

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {
  topic: Topic = {
    id: 1,
    name: 'Financial'
  };

  topics = TOPICS;
  selectedTopic?: Topic;
  
  onSelect(topic: Topic): void {
    this.selectedTopic = topic;
  }
}
