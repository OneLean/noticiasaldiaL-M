import { Component } from '@angular/core';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import * as Editor from 'ckeditor5-custom-build/build/ckeditor';
// import * as Editor from '../../../../ckCustomBuild/build/ckeditor'

import { Font } from '@ckeditor/ckeditor5-font';


@Component({
  selector: 'app-create-view-section',
  templateUrl: './create-view-section.component.html',
  styleUrls: ['./create-view-section.component.css']
})
export class CreateViewSectionComponent {
  public Editor = Editor;
  public config = {
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'bold',
        'italic',
        'underline',
        'fontFamily',
        '|',
        'heading',
        'alignment',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageInsert',
        'link',
        'blockQuote',
        'mediaEmbed',
        'insertTable',
        'linkImage', 
        '-',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        'strikethrough',
        'highlight',
        'removeFormat',
        '|',
        'superscript',
        'subscript',
        'findAndReplace',
        'specialCharacters',
        'horizontalLine',
        
      ],
      shouldNotGroupWhenFull: true
    },
    language: 'es',
    image: {
      toolbar: [
        'imageTextAlternative',
        'toggleImageCaption',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        'linkImage'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties'
      ]
    }
  }
}
