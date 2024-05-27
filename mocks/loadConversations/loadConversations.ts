import {a as ResponseResolver} from 'msw/lib/core/RequestHandler-50ddea0c';
import {delay, HttpResponse} from 'msw';
import {IConversationItem} from 'src/Store/Models';

export const data: IConversationItem[] = [
    {
        id: 'ee3f7f02-23e5-4875-8471-63346b8a664b',
        title: 'Как сделать салат оливье',
        createTime: '2023-12-10T13:11:43.874272+00:00',
        updateTime: '2023-12-10T13:13:23.210358+00:00',
    },
    {
        id: '85468e95-689d-400b-b2ff-5556fe4098ef',
        title: 'Уменьшение размера логотипа',
        createTime: '2023-12-10T11:24:10.799890+00:00',
        updateTime: '2023-12-10T12:02:39.344255+00:00',
    },
    {
        id: 'fd6d9e38-ccc6-48d6-826e-40a226dfa6cd',
        title: 'Goal vs Result',
        createTime: '2023-12-09T15:12:02.891407+00:00',
        updateTime: '2023-12-09T17:50:50.855078+00:00',
    },
    {
        id: 'c4d0d71f-45c3-401f-a666-e0d81b94cc8c',
        title: 'Web App Text Markup',
        createTime: '2023-12-06T20:13:47.754562+00:00',
        updateTime: '2023-12-06T20:14:10.064828+00:00',
    },
    {
        id: 'e55d70dd-d67e-4d0f-b81c-9426ab7989a9',
        title: 'Text Classification: Binary ML',
        createTime: '2023-12-05T16:52:47.178946+00:00',
        updateTime: '2023-12-05T19:49:25.510564+00:00',
    },
    {
        id: '237910c0-03b9-4cff-b21e-d5dd62130075',
        title: 'NLP: Linguistics, Syntax, Semantics',
        createTime: '2023-12-05T18:41:29.615436+00:00',
        updateTime: '2023-12-05T18:44:00.188490+00:00',
    },
    {
        id: '15a0bab8-e4e4-41a2-856f-fe83f024c5d6',
        title: 'Группировка с шагом 2',
        createTime: '2023-12-04T20:04:22.795403+00:00',
        updateTime: '2023-12-04T20:49:35.463827+00:00',
    },
    {
        id: 'ac0e7f60-771a-4ec4-babd-9778312d287b',
        title: 'Word2Vec: Семантические векторы слов.',
        createTime: '2023-12-01T16:20:38.734307+00:00',
        updateTime: '2023-12-01T17:55:09.483522+00:00',
    },
    {
        id: 'b476e264-c596-4c6d-acd1-c289aa24746e',
        title: 'Softmax for classification.',
        createTime: '2023-11-27T16:30:31.483571+00:00',
        updateTime: '2023-11-27T18:32:22.355277+00:00',
    },
    {
        id: '0aa27641-2438-411f-a9af-cc0bfe808741',
        title: 'Метрики: Precision, Recall, Accuracy',
        createTime: '2023-11-27T15:49:37.449047+00:00',
        updateTime: '2023-11-27T15:56:25.663168+00:00',
    },
    {
        id: 'd2b43e74-f747-484c-8562-9d353fa87c12',
        title: 'Word2Vec, Skip-gram, CBOW Models',
        createTime: '2023-11-26T15:12:40.566671+00:00',
        updateTime: '2023-11-26T15:12:57.306521+00:00',
    },
    {
        id: '39745970-ac15-45f1-9ab7-b804eeb6df13',
        title: 'Fake News Detection Methods',
        createTime: '2023-11-26T13:57:35.763667+00:00',
        updateTime: '2023-11-26T13:57:59.285953+00:00',
    },
    {
        id: 'cfb26ad1-1f7a-4780-aa0d-7a14a84506be',
        title: 'Большие данные и аналитика',
        createTime: '2023-11-24T21:03:30.245780+00:00',
        updateTime: '2023-11-24T21:17:44.083645+00:00',
    },
    {
        id: '58806e90-01b5-4c8b-aec0-87847ee3e4ce',
        title: 'Text Segmentation Explanation',
        createTime: '2023-11-24T19:34:11.479611+00:00',
        updateTime: '2023-11-24T20:48:02.523407+00:00',
    },
    {
        id: 'e4a46eb7-3ef3-48b9-8017-1bbe2711b80c',
        title: 'Big Data Thesis Ideas',
        createTime: '2023-11-24T19:27:17.266563+00:00',
        updateTime: '2023-11-24T19:31:29.886067+00:00',
    },
    {
        id: 'cb903053-bb75-4e67-9971-e5bc231449ff',
        title: 'Fake News Detection System',
        createTime: '2023-11-24T18:52:03.738862+00:00',
        updateTime: '2023-11-24T18:55:22.080817+00:00',
    },
    {
        id: '7aedc5b3-7b6a-41ea-aa7e-baa1262ea0ad',
        title: 'Fake News Detection Methods',
        createTime: '2023-11-23T14:00:13.092662+00:00',
        updateTime: '2023-11-23T14:31:08.950585+00:00',
    },
    {
        id: '3408afc4-9906-4cf3-8178-817f31f9a2aa',
        title: 'JavaScript: Замена символов',
        createTime: '2023-11-21T13:53:36.167827+00:00',
        updateTime: '2023-11-21T13:56:12.512454+00:00',
    },
]

export const loadConversations: ResponseResolver = async ({ request, params, cookies }) => {
    await delay(2000)
    return HttpResponse.json(data)
}
