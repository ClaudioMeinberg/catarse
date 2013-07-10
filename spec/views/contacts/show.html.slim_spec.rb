require 'spec_helper'

describe "contacts/show" do
  before(:each) do
    @contact = assign(:contact, stub_model(Contact,
      :firstname => "Firstname",
      :lastname => "Lastname",
      :email => "Email",
      :sports => "Sports",
      :message => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Firstname/)
    rendered.should match(/Lastname/)
    rendered.should match(/Email/)
    rendered.should match(/Sports/)
    rendered.should match(/MyText/)
  end
end
