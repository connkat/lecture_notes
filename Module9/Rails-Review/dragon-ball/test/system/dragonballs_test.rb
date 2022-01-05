require "application_system_test_case"

class DragonballsTest < ApplicationSystemTestCase
  setup do
    @dragonball = dragonballs(:one)
  end

  test "visiting the index" do
    visit dragonballs_url
    assert_selector "h1", text: "Dragonballs"
  end

  test "creating a Dragonball" do
    visit dragonballs_url
    click_on "New Dragonball"

    click_on "Create Dragonball"

    assert_text "Dragonball was successfully created"
    click_on "Back"
  end

  test "updating a Dragonball" do
    visit dragonballs_url
    click_on "Edit", match: :first

    click_on "Update Dragonball"

    assert_text "Dragonball was successfully updated"
    click_on "Back"
  end

  test "destroying a Dragonball" do
    visit dragonballs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Dragonball was successfully destroyed"
  end
end
