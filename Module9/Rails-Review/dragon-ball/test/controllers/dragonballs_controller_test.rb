require "test_helper"

class DragonballsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dragonball = dragonballs(:one)
  end

  test "should get index" do
    get dragonballs_url
    assert_response :success
  end

  test "should get new" do
    get new_dragonball_url
    assert_response :success
  end

  test "should create dragonball" do
    assert_difference('Dragonball.count') do
      post dragonballs_url, params: { dragonball: {  } }
    end

    assert_redirected_to dragonball_url(Dragonball.last)
  end

  test "should show dragonball" do
    get dragonball_url(@dragonball)
    assert_response :success
  end

  test "should get edit" do
    get edit_dragonball_url(@dragonball)
    assert_response :success
  end

  test "should update dragonball" do
    patch dragonball_url(@dragonball), params: { dragonball: {  } }
    assert_redirected_to dragonball_url(@dragonball)
  end

  test "should destroy dragonball" do
    assert_difference('Dragonball.count', -1) do
      delete dragonball_url(@dragonball)
    end

    assert_redirected_to dragonballs_url
  end
end
