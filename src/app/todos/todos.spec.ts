import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosService } from '../services/todos.service';

describe('Todos', () => {
  let component: TodosService;
  let fixture: ComponentFixture<TodosService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosService],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
