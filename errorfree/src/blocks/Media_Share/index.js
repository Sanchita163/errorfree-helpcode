import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import edit from './edit';
import save from './save';

registerBlockType('older-people-blocks/media-share', {
    title: 'Media Share',
    icon: 'video-alt3', // use an appropriate icon
    category: 'media',
    attributes: {
        url: {
            type: 'string',
            default: '',
        },
    },
    edit,
    save,
});
