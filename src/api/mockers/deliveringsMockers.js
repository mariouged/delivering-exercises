export const deliveringsMockers = [
  {
    id: 1,
    version: 1,
    name: 'Título del archivo a subir 2.pdf',
    type: 'Document / PDF',
    size: 3.8,
    delivery_date: new Date(2018, 11, 28, 14, 45),
    download_url: '/mock-document-url.pdf',
    comments: [
      { user: 123, role: 'student', comment_date: new Date(2018, 11, 28, 14, 45), message: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión.' },
      { user: 456, role: 'teacher', comment_date: new Date(2018, 11, 29, 10, 11), message: '¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.' },
    ]
  },
  {
    id: 2,
    version: 2,
    name: 'Título del archivo a subir 2.pdf',
    type: 'Document / PDF',
    size: 4.8,
    delivery_date: new Date(2018, 11, 30, 8, 22),
    download_url: '/mock-document-url.pdf',
    comments: [
      { user: 123, role: 'student', comment_date: new Date(2018, 11, 30, 8, 22), message: 'Realizados los cambios según feedback.' },
      { user: 456, role: 'teacher', comment_date: new Date(2018, 11, 30, 15, 25), message: 'Perfecto excelente trabajo.' },
    ]
  },
]