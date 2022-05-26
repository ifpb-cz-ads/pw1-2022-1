const controller = require('../controller');

test('página home renderiza', () => {
    const request = {};
    const response = { render: jest.fn() };

    controller.home(request, response);

    expect(response.render.mock.calls[0][0]).toBe('home');
});

test('página about renderiza com frase do dia', () => {
    const request = {}
    const response = { render: jest.fn() }
    controller.about(request, response)

    expect(response.render.mock.calls.length).toBe(1)
    expect(response.render.mock.calls[0][0]).toBe('about')
    expect(response.render.mock.calls[0][1]).toEqual(
        expect.objectContaining({ mensagem: expect.stringMatching(/\W/)
    }))
})

test('404 renderiza', () => {
    const request = {}
    const response = { render: jest.fn() }
    controller.notFound(request, response)

    expect(response.render.mock.calls.length).toBe(1)
    expect(response.render.mock.calls[0][0]).toBe('404')
})

test('500 handler renders', () => {
    const err = new Error('some error')
    const request = {}
    const response = { render: jest.fn() }
    const next = jest.fn()
    controller.erro(err, request, response, next)
    expect(response.render.mock.calls.length).toBe(1)
    expect(response.render.mock.calls[0][0]).toBe('500')
})
