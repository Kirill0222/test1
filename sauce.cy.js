describe('test', () => {
  beforeEach(() => {
    cy.visit('https://izh.pancoffee.ru/')
  })

  it('add Fanki to the card', () => {
  	const name = 'Николаев Кирилл Михайлович'
  	const number = '9828281362'
  	const email = 'asdasdasdad@gmail.com'
  	const city = 'Москва'
  	const addres = 'ул. Московская, д.2'

  	cy.get('.mobile-menu-toggle').first().click()
  	cy.get('.menu-item.menu-item-type-taxonomy.menu-item-object-product_cat.menu-item-has-children.menu-item-5990.mobile-menu__item a').first().click()
  	cy.get('[data-product_id=6006]').first().click()
  	cy.get('.col-xs-6.col-sm-1.col-md-1.end-xs.top-xs a').first().click()
  	cy.wait(2000)
  	cy.get('.wc-proceed-to-checkout a').first().click()
  	cy.wait(8000)
  	cy.get('.input-text').first().type(`${name}{enter}`)
  	cy.wait(1000)
  	cy.get('.input-text').eq(1).type(`${number}{enter}`)
  	cy.wait(1000)
  	cy.get('.input-text').eq(2).type(`${email}{enter}`)
  	cy.wait(1000)
  	cy.get('.select2-selection__rendered').first().click()
  	cy.wait(1000)
  	cy.get('.select2-search__field').first().type(`${city}{enter}`)
  	cy.wait(1000)
  	cy.get('.input-text').eq(3).type(`${addres}{enter}`)
	})

  it('add Mild to the card', () => {
    const name = 'Николаев Кирилл Михайлович'
    const number = '9828281362'
    const email = 'asdasdasdad@gmail.com'
    const city = 'Москва'
    const addres = 'ул. Московская, д.2'

    cy.get('.mobile-menu-toggle').first().click()
    cy.get('.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-6524.mobile-menu__item a').first().click()
    cy.get('.product_type_simple.add_to_cart_button.ajax_add_to_cart.category-link__quick-order').first().click()
    cy.wait(2000)
    cy.get('.col-xs-6.col-sm-1.col-md-1.end-xs.top-xs a').first().click()
    cy.wait(2000)
    cy.get('.wc-proceed-to-checkout a').first().click()
    cy.wait(8000)
    cy.get('.input-text').first().type(`${name}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(1).type(`${number}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(2).type(`${email}{enter}`)
    cy.wait(1000)
    cy.get('.select2-selection__rendered').first().click()
    cy.wait(1000)
    cy.get('.select2-search__field').first().type(`${city}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(3).type(`${addres}{enter}`)
  })

  it('add Aroma to the card', () => {
    const name = 'Николаев Кирилл Михайлович'
    const number = '9828281362'
    const email = 'asdasdasdad@gmail.com'
    const city = 'Москва'
    const addres = 'ул. Московская, д.2'

    cy.get('.mobile-menu-toggle').first().click()
    cy.get('.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-6526.mobile-menu__item a').first().click()
    cy.get('.product_type_simple.add_to_cart_button.ajax_add_to_cart.category-link__quick-order').first().click()
    cy.wait(2000)
    cy.get('.col-xs-6.col-sm-1.col-md-1.end-xs.top-xs a').first().click()
    cy.wait(2000)
    cy.get('.wc-proceed-to-checkout a').first().click()
    cy.wait(8000)
    cy.get('.input-text').first().type(`${name}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(1).type(`${number}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(2).type(`${email}{enter}`)
    cy.wait(1000)
    cy.get('.select2-selection__rendered').first().click()
    cy.wait(1000)
    cy.get('.select2-search__field').first().type(`${city}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(3).type(`${addres}{enter}`)
  })

  it('add Kosta-Rika to the card', () => {
    const name = 'Николаев Кирилл Михайлович'
    const number = '9828281362'
    const email = 'asdasdasdad@gmail.com'
    const city = 'Москва'
    const addres = 'ул. Московская, д.2'

    cy.get('.mobile-menu-toggle').first().click()
    cy.get('.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-6527.mobile-menu__item a').first().click()
    cy.get('.product_type_simple.add_to_cart_button.ajax_add_to_cart.category-link__quick-order').first().click()
    cy.wait(2000)
    cy.get('.col-xs-6.col-sm-1.col-md-1.end-xs.top-xs a').first().click()
    cy.wait(2000)
    cy.get('.wc-proceed-to-checkout a').first().click()
    cy.wait(8000)
    cy.get('.input-text').first().type(`${name}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(1).type(`${number}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(2).type(`${email}{enter}`)
    cy.wait(1000)
    cy.get('.select2-selection__rendered').first().click()
    cy.wait(1000)
    cy.get('.select2-search__field').first().type(`${city}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(3).type(`${addres}{enter}`)
  })

  it('add Berry to the card', () => {
    const name = 'Николаев Кирилл Михайлович'
    const number = '9828281362'
    const email = 'asdasdasdad@gmail.com'
    const city = 'Москва'
    const addres = 'ул. Московская, д.2'

    cy.get('.mobile-menu-toggle').first().click()
    cy.get('.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-6529.mobile-menu__item a').first().click()
    cy.get('.product_type_simple.add_to_cart_button.ajax_add_to_cart.category-link__quick-order').first().click()
    cy.wait(2000)
    cy.get('.col-xs-6.col-sm-1.col-md-1.end-xs.top-xs a').first().click()
    cy.wait(2000)
    cy.get('.wc-proceed-to-checkout a').first().click()
    cy.wait(8000)
    cy.get('.input-text').first().type(`${name}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(1).type(`${number}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(2).type(`${email}{enter}`)
    cy.wait(1000)
    cy.get('.select2-selection__rendered').first().click()
    cy.wait(1000)
    cy.get('.select2-search__field').first().type(`${city}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(3).type(`${addres}{enter}`)
  })

  it('add Natty to the card', () => {
    const name = 'Николаев Кирилл Михайлович'
    const number = '9828281362'
    const email = 'asdasdasdad@gmail.com'
    const city = 'Москва'
    const addres = 'ул. Московская, д.2'

    cy.get('.mobile-menu-toggle').first().click()
    cy.get('.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-6767.mobile-menu__item a').first().click()
    cy.get('.product_type_simple.add_to_cart_button.ajax_add_to_cart.category-link__quick-order').first().click()
    cy.wait(2000)
    cy.get('.col-xs-6.col-sm-1.col-md-1.end-xs.top-xs a').first().click()
    cy.wait(2000)
    cy.get('.wc-proceed-to-checkout a').first().click()
    cy.wait(8000)
    cy.get('.input-text').first().type(`${name}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(1).type(`${number}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(2).type(`${email}{enter}`)
    cy.wait(1000)
    cy.get('.select2-selection__rendered').first().click()
    cy.wait(1000)
    cy.get('.select2-search__field').first().type(`${city}{enter}`)
    cy.wait(1000)
    cy.get('.input-text').eq(3).type(`${addres}{enter}`)
  })
})