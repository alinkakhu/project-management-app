import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../common/api';
import { AuthManager } from '../common/auth.manager';
import { Message } from '../common/message';

@Component({
  selector: 'app-column-page',
  templateUrl: './column-page.component.html',
  styleUrls: ['./column-page.component.css']
})
export class ColumnPageComponent {
  columns: any[] = [];
  title: string = "";
  order: number = 0;
  boardId: string = "";
  board: any = {};
  message: Message = new Message();

  constructor(private route: ActivatedRoute) { 
  }

  async ngOnInit() {
    this.boardId = this.route.snapshot.paramMap.get('id') || "";
    this.board = await Api.getInstance().get(`boards/${this.boardId}`);
    this.columns = await Api.getInstance().get(`boards/${this.boardId}/columns`);
  }

  async onCreate() {
    try {
      const column = await Api.getInstance().post(`boards/${this.boardId}/columns`, {
        title: this.title,
        order: this.order
      });
      this.columns.push(column);
      this.title = "";
      this.order = 0;
    } catch (e: any) {
      this.message.error(e.message || e + "")
    }
  }

  async onUpdate(column: any) {
    try {
      await Api.getInstance().put(`boards/${this.boardId}/columns/${column._id}`, {
        title: column.title,
        order: column.order
      });
    } catch (e: any) {
      this.message.error(e.message || e + "")
    }
  }

  async onDelete(column: any) {
    try {
      await Api.getInstance().delete(`boards/${this.boardId}/columns/${column._id}`);
      this.columns = this.columns.filter(c => c._id !== column._id);
    } catch (e: any) {
      this.message.error(e.message || e + "")
    }
  }

  async onIncrementOrder(column: any) {
    column.order++;
    await this.onUpdate(column);
    this.columns = await Api.getInstance().get(`boards/${this.boardId}/columns`);
  }

  async onDecrementOrder(column: any) {
    column.order--;
    if (column.order < 0) column.order = 0;
    await this.onUpdate(column);
    this.columns = await Api.getInstance().get(`boards/${this.boardId}/columns`);
  }
}
