class ContactsController <  ApplicationController


	def new
    @contact = Contact.new(params[:contact] )
	end

  def create
    @contact = Contact.new(params[:contact] )
    respond_to do |format|
      if @contact.save
        format.html { redirect_to thanks_path, notice: 'Thanks for getting in touch.' }
        format.json { render json: @contact, status: :created, location: @contact }
      else
        format.html { render action: "new" }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  def index
    @contacts = Contact.all
  end


end
