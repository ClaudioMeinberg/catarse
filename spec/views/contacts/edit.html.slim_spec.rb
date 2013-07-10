require 'spec_helper'

describe "contacts/edit" do
  before(:each) do
    @contact = assign(:contact, stub_model(Contact,
      :firstname => "MyString",
      :lastname => "MyString",
      :email => "MyString",
      :sports => "MyString",
      :message => "MyText"
    ))
  end

  it "renders the edit contact form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", contact_path(@contact), "post" do
      assert_select "input#contact_firstname[name=?]", "contact[firstname]"
      assert_select "input#contact_lastname[name=?]", "contact[lastname]"
      assert_select "input#contact_email[name=?]", "contact[email]"
      assert_select "input#contact_sports[name=?]", "contact[sports]"
      assert_select "textarea#contact_message[name=?]", "contact[message]"
    end
  end
end
